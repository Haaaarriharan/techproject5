
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, Card,CardHeader, CardContent, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import wait from '../../../utils/wait';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MenuCreateForm = (props) => {
  console.log(props);
  const [statusData] = useState('');
  /* const handleStatusChange = (e) => {
    setStatusData(e.target.value);
  }; */
  const navigate = useNavigate();
  console.log('status', statusData);
  return (
    <Formik
      initialValues={{
        name: '',
        state: statusData || '',
      }}
      validationSchema={Yup
        .object()
        .shape({
          name: Yup
            .string()
            .max(255)
            .required('Name is required'),
          state: Yup.string().max(255)
        })}
      onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
        try {
          // NOTE: Make API request
          await wait(500);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          axios.post('https://mi.duceapps.com/api/v1/menu', values);
          console.log('FormValues', values);
          toast.success('Menu Created');
          navigate('/dashboard/menu');
        } catch (err) {
          console.error(err);
          toast.error('Something went wrong!');
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form
          onSubmit={handleSubmit}
        // {...other}
        >
         
            <Box>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                 <Card>
          <CardHeader title="Personal Details" />

              <CardContent>
              <Box sx={{ mb: 2 }}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Username"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value="Carson Darrin"
                    variant="outlined"
                  />
                  </Box>
              <Box sx={{ mb: 2 }}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Type"
                    name="type"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value="Manager"
                    variant="outlined"
                  />
                  </Box>

                  <Box sx={{ mb: 2 }}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="First Name"
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value="Darrin"
                    variant="outlined"
                  />
                  </Box>

                  <Box sx={{ mb: 2 }}>
                   <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Last Name"
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value="Carson"
                    variant="outlined"
                  />
                  </Box>

                

                  </CardContent>
                  </Card>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                <Card>
                  <CardContent>
                   <Box sx={{ mb: 2 }}>
                   <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Email Address"
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value="carson.darrin@devias.io"
                    variant="outlined"
                  />
                  </Box>

                   <Box sx={{ mb: 2 }}>
                   <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Phone Number"
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value="919876543210"
                    variant="outlined"
                  />
                  </Box>  
                   <Box sx={{ mb: 2 }}>
                   <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Company"
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value="Technoduce"
                    variant="outlined"
                  />
                  </Box>   

                  <FormControl component="fieldset" name="state">
                    <FormLabel component="legend">Status</FormLabel>
                    <RadioGroup
                      row aria-label="Status"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                    >
                      <FormControlLabel checked name="state" value="Active" control={<Radio />} label="Active" />
                      <FormControlLabel name="state" value="InActive" control={<Radio />} label="InActive" />
                    </RadioGroup>
                  </FormControl>
                  </CardContent>
                  </Card>

                      <Box sx={{ mt: 2 }}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  UPDATE
                </Button>
              </Box>

                </Grid>
              </Grid>
            </Box>
        </form>
      )}
    </Formik>
  );
};
export default MenuCreateForm;
