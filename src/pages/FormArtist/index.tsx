import React from 'react';

import * as Styled from './styles';
import { Formik, Form } from 'formik';
import InputField from 'components/ui/InputField';
import { Button } from 'components/ui/Button/styles';
import { ArtistSchema } from './validate';
import { useSaveArtist } from 'services/artists/post';

const FormArtist: React.FC = () => {
  const { mutate } = useSaveArtist();

  return (
    <Styled.Wrapper>
      <Formik
        initialValues={{
          artistName: '',
          video: '',
          rating: 0,
          image: '',
        }}
        validationSchema={ArtistSchema}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <InputField name="artistName" label="Artist Name" type="text" />

            <InputField name="video" label="Favorite music video (Youtube)" type="text" />
            <InputField name="rating" label="Artist rating" type="number" />
            <InputField name="image" label="Artist photo" type="text" />

            <Button variant="brand" type="submit" role="button">
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </Styled.Wrapper>
  );
};

export default FormArtist;
