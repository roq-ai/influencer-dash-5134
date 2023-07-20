import * as yup from 'yup';

export const influencerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  language: yup.string().required(),
  genre: yup.string().required(),
  followers: yup.number().integer().required(),
  social_media_links: yup.string().required(),
});
