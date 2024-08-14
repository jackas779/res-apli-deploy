const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'El titulo de la pelicula debe ser un cadena de texto',
    required_error: 'Titulo es requerido.'
  }),
  year: z.number().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().min(20, {
    message: 'La duracion minima de una pelicula es de 20 minutos '
  }),
  rate: z.number().min(0).max(10).default(1),
  poster: z.string({
    required_error: 'El poster es requerido.'
  }).url({
    message: 'El póster debe ser una URL válida.'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']),
    {
      required_error: 'El genero de la pelicula es requerido',
      invalid_type_error: 'Movie genre must be an array of enum Genre'
    }
  )
})

function validateMovie (input) {
  return movieSchema.safeParse(input)
}

function partialMovie (input) {
  return movieSchema.partial().safeParse(input)
}

module.exports = {
  validateMovie,
  partialMovie
}
