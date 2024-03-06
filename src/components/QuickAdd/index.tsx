import InputField from 'components/InputField';
import Card from '../Card';
import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'components/Button/styles';

const QuickAddSchema = Yup.object().shape({
  artistName: Yup.string().required('Please input the artist name'),
  video: Yup.string().required('Please input the video valid'),
});

const QuickAdd: FC = () => {
  return (
    <Card title="Quick add">
      <Formik
        initialValues={{
          artistName: '',
          video: '',
        }}
        validationSchema={QuickAddSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <InputField name="artistName" label="Artist Name" type="input" />

            <InputField name="video" label="Favorite music video (Youtube)" type="input" />

            <Button variant="brand"> Add</Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default QuickAdd;
