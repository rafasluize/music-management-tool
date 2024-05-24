import React from 'react';

import * as Styled from './styles';
import { Formik, Form } from 'formik';
import InputField from 'components/ui/InputField';
import { Button } from 'components/ui/Button/styles';
import { ArtistSchema } from './validate';
import { useSaveArtist } from 'services/artists/post';
import { useParams } from 'react-router-dom';
import { useFavArtistsById } from 'services/artists';

const FormArtist: React.FC = () => {
  const { mutate } = useSaveArtist();

  const params = useParams<{ id: string }>();

  const { data: artist } = useFavArtistsById(Number(params.id) || 0);

  return (
    <Styled.Wrapper>
      <Formik
        initialValues={{
          name: '',
          video: '',
          rating: 1,
          image: '',
        }}
        validationSchema={ArtistSchema}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <InputField name="name" label="Artist Name" type="text" value={artist?.name || ''} />

            <InputField name="video" label="Favorite music video (Youtube)" type="text" value={artist?.video || ''} />
            <InputField name="rating" label="Artist rating" type="number" value={artist?.rating || ''} />
            <InputField name="image" label="Artist photo" type="text" value={artist?.image || ''} />

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
