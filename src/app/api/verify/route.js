export async function POST(req) {
  const { id } = await req.json();

  const database = {
    "CA/SE1/3495": { 
      name: "SOMYA RANJAN ROUT",
      issued: "26 Dec 2025" 
    },
    "CA/SE1/5664": { 
      name: "Ishan Srivastava",
      issued: "26 Dec 2025"
    }
  };

  if (database[id]) {
    return Response.json({
      success: true,
      certificateId: id,
      name: database[id].name,
      issued: database[id].issued
    });
  }

  return Response.json({
    success: false,
    msg: "Certificate not found or invalid."
  });
}
