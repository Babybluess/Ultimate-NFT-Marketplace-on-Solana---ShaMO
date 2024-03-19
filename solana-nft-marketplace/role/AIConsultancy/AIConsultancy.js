const axios = require("axios")
const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjUwYWRmNDMtZjM2Ni00MzgyLThkNTctYzBkNzZlNjk0NWM3IiwidHlwZSI6ImFwaV90b2tlbiJ9.4mnOPF1RpkTVIh8pLSgUyRBmPkMRv_GlUfk9-QaxuLU"

function AIConsultancy(prompt) {
    const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/text/chat",
        headers: {
            authorization: `Bearer ${api_key}`,
        },
        data: {
            providers: "openai",
            text: prompt,
            chatbot_global_action: "Act as an assistant",
            previous_history: [],
            temperature: 0.0,
            max_tokens: 150,
            fallback_providers: "",
        },
    };

    return axios
        .request(options)
        .then((response) => {
            console.log(response);
            const consultancy = response.data?.openai?.message?.[1].message;
            return consultancy;
        })
        .catch((error) => {
            console.log(error);
        });
}

export default AIConsultancy;