import * as Yup from 'yup';

export const ArtistSchema = Yup.object().shape({
  artistName: Yup.string().required('Please input the artist name'),
  video: Yup.string().required('Please input the video valid'),
  image: Yup.string().required('Please input the photo url valid'),
  rating: Yup.number()
    .min(0, 'Must be more than 0')
    .max(10, 'Must be less than or equal to 10')
    .required('Please input the rating valid'),
});
