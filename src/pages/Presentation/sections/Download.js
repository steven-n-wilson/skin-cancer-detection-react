// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Built with
            </MKTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="Python">
                  <MKBox component="a" href="https://www.python.org/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="TensorFlow">
                  <MKBox component="a" href="https://www.tensorflow.org/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Google Colab">
                  <MKBox component="a" href="https://colab.research.google.com/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://colab.research.google.com/img/colab_favicon_256px.png"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="NumPy">
                  <MKBox component="a" href="https://numpy.org/" target="_blank">
                    <MKBox component="img" src="https://numpy.org/images/logo.svg" width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Pandas">
                  <MKBox component="a" href="https://pandas.pydata.org/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://pandas.pydata.org/static/img/pandas_mark.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
