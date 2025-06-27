import type { PageServerLoad, Actions } from "./$types.js";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { fileSchema } from "$lib/schemas/files-schema.js";
import { zod } from "sveltekit-superforms/adapters"

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(fileSchema));
	const data = [
		{
		  id: "1",
		  name: "Undangan Internalisasi Nilai BerAKHLAK Provinsi",
		  description: "Fail-fail umum untuk seluruh pegawai BPS Kabupaten Rokan Hilir",
		  label: "Umum",
		  link: "https://www.figma.com/design/e9gjRGa0gmFh45q4WQoDrl/Klorofil?node-id=0-1&p=f&t=T1IDB3793qnEKTNQ-0",
		  date: new Date().toISOString(), // serialize
		  importance: "false",
		},
		{
		  id: "2",
		  name: "Memo Dinas Internalisasi Nilai BerAKHLAK",
		  description: "Fail-fail khusus untuk pegawai BPS Kabupaten Rokan Hilir",
		  label: "Khusus",
		  link: "https://drive.google.com/drive/folders/1zucZibvqZRcaK4jcqWBFaF8JnGQxwjna?usp=drive_link",
		  date: new Date().toISOString(),
		  importance: "false",
		},
		{
		  id: "3",
		  name: "Undangan Coaching Pilar 6 Zona Integritas",
		  description: "Pengumuman terbaru di BPS Kabupaten Rokan Hilir",
		  label: "Pengumuman",
		  link: "/files/pengumuman",
		  date: new Date().toISOString(),
		  importance: "true",
		},
	  ];

	return { 
		form,
		data
	};
};

export const actions: Actions = {
	default: async (event) => {
	  // Log received form data
	  const requestData = await event.request.formData();
	  console.log("Form submission received on server. Raw FormData:", requestData);

	  // Convert FormData to an object for easier logging if needed, or pass event directly
	  const formDataObject = Object.fromEntries(requestData.entries());
      console.log("Form submission received on server. Parsed Data:", formDataObject);

	  const form = await superValidate(event, zod(fileSchema));
	  if (!form.valid) {
		console.log("Form validation failed on server. Errors:", form.errors);
		return fail(400, {
		  form,
		});
	  }
	  console.log("Form validated successfully on server. Data:", form.data);
	  return {
		form,
	  };
	},
  };