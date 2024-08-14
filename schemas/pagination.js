const z = require('zod')

function validationPaginator(input, number) {
  const pagination = z.object({
    pag: z.number().min(1).max(8)
  })
  return pagination.safeParse(input)
}

module.exports = {
  validationPaginator
}
