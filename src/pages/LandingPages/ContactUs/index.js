/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useState } from "react";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/illustrations/bg-analyze.jpg";

function ContactUs() {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Handle file selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission to analyze the image
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    setLoading(true);
    setResult(null);

    // Prepare form data for POST
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("https://skin-cancer-detection-api-end-3288f458d6d7.herokuapp.com/api/analyze-image", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Network error");
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error during image analysis:", error);
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/analyze-image",
            label: "Analyze Image",
            color: "info",
          }}
          sticky
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            {/* Card Header */}
            <MKBox
              variant="gradient"
              bgColor="dark"
              coloredShadow="dark"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h5" color="white">
                Analyze Your Image
              </MKTypography>
              <MKTypography variant="body2" color="white">
                Upload your image to check for melanoma.
              </MKTypography>
            </MKBox>
            {/* Card Body */}
            <MKBox p={3} textAlign="center">
              <form
                id="image-upload-form"
                method="post"
                encType="multipart/form-data"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                {/* Inline file input */}
                <MKBox mb={2}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{
                      width: "100%",
                      padding: "10px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                    required
                  />
                </MKBox>
                {/* Image preview */}
                {imagePreview && (
                  <MKBox mb={2}>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{ maxWidth: "100%", borderRadius: "8px" }}
                    />
                  </MKBox>
                )}
                {/* Analyze button */}
                <MKBox mt={3}>
                  <MKButton type="submit" variant="gradient" color="dark">
                    Analyze Image
                  </MKButton>
                </MKBox>
              </form>
              {/* Loading indicator */}
              {loading && (
                <MKBox mt={3} textAlign="center">
                  <MKTypography variant="body2" color="text" mt={2}>
                    Analyzing image...
                  </MKTypography>
                </MKBox>
              )}
              {/* Display results */}
              {result && (
                <MKBox mt={3} textAlign="center">
                  {result.error ? (
                    <MKTypography variant="body2" color="error">
                      {result.error}
                    </MKTypography>
                  ) : (
                    <MKTypography variant="body2" color="text">
                      Analysis result: {result.prediction}
                      <br />
                      Confidence: {result.confidence}
                    </MKTypography>
                  )}
                </MKBox>
              )}
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
