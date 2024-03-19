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
            providers: "replicate",
            text: prompt,
            resolution: "512x512",
            fallback_providers: "",
        },
    };

    return axios
        .request(options)
        .then((response) => {
            console.log(response);
            const imageUrl = response.data?.replicate?.items?.[0]?.image_resource_url;
            return imageUrl;
        })
        .catch((error) => {
            console.error(error);
        });
}

export default NFTgeneration;