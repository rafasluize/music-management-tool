import InputField from 'components/ui/InputField';
import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'components/ui/Button/styles';
import Card from 'components/ui/Card';

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
            <InputField name="artistName" label="Artist Name" type="text" />

            <InputField name="video" label="Favorite music video (Youtube)" type="text" />

            <Button variant="brand" type="submit" role="button">
              {' '}
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default QuickAdd;
