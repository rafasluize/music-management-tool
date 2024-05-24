import { HttpResponse, http } from 'msw';

const saveArtist = [
  http.post(`http://localhost/artist`, async ({ request }) => {
    const newArtist = await request.json();

    return HttpResponse.json(newArtist, { status: 201 });
  }),
];

export { saveArtist };
