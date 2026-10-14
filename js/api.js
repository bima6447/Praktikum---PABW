const ALAMAT = "https://jsonplaceholder.typicode.com/posts";

export async function ambilNotisia() {
  try {
    const badan = JSON.stringify({ titulu: 'Avisu', nivel: 2 });

    const respons = await fetch(ALAMAT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: badan
    });

    if (!respons.ok) throw new Error('status ' + respons.status);

    const data = await respons.json();
    console.log(data.titulu); 

    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}