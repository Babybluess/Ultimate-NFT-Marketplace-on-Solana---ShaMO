const axios = require("axios")
const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTFlMGNmMWQtYTNjMi00ZThkLTlhZTItNWZkOTJkZDgzODJlIiwidHlwZSI6ImFwaV90b2tlbiJ9.zgcwic78X0b6K6DKLf-iRgJOFiIJglgAGtv3CwLsh2I"

function NFTgeneration(prompt) {
    const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/image/generation",
        headers: {
            authorization: `Bearer ${api_key}`,
        },
        data: {
            providers: "amazon",
            text: prompt,
            resolution: "512x512",
            fallback_providers: "",
            num_images: 3
        },
    };

    return axios
        .request(options)
        .then((response) => {
            console.log(response);
            // const imageUrls = response.data?.replicate?.items?.map(item => item.image_resource_url);
            const imageUrls = response.data?.amazon?.items?.map(item => item.image_resource_url);
            return imageUrls;
        })
        .catch((error) => {
            console.error(error);
        });
}

export default NFTgeneration;