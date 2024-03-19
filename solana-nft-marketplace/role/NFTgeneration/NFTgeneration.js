const axios = require("axios")
const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjUwYWRmNDMtZjM2Ni00MzgyLThkNTctYzBkNzZlNjk0NWM3IiwidHlwZSI6ImFwaV90b2tlbiJ9.4mnOPF1RpkTVIh8pLSgUyRBmPkMRv_GlUfk9-QaxuLU"

function NFTgeneration(prompt) {
    const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/image/generation",
        headers: {
            authorization: `Bearer ${api_key}`,
        },
        data: {
            providers: "replicate", //stabilityai
            text: prompt,
            resolution: "512x512", // change to 1024 if using stabilityai because it only supports 1024
            fallback_providers: "",
            num_images: 1 // replicate only supports generating 1 images but stability can generate 3
        },
    };

    return axios
        .request(options)
        .then((response) => {
            console.log(response);
            const imageUrls = response.data?.replicate?.items?.map(item => item.image_resource_url);
            // const imageUrls = response.data?.stability?.items?.map(item => item.image_resource_url);
            return imageUrls;
        })
        .catch((error) => {
            console.error(error);
        });
}

export default NFTgeneration;