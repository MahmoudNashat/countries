import { Container, Grid } from '@mui/material'
import Skeleton from '@mui/material/Skeleton';

function SkeletonLoader() {
    return (
        <Container maxWidth={false}>
            <Grid container spacing={8} marginTop={7}>
                {
                    [...Array(20)].map((val, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <Skeleton variant="rectangular" animation="wave" height={150} />
                            <Skeleton variant="text" animation="wave" width={150} height={30} style={{ margin: "10px 0" }} />
                            <Skeleton variant="text" animation="wave" width={150} />
                            <Skeleton variant="text" animation="wave" width={150} />
                            <Skeleton variant="text" animation="wave" width={150} />
                            <Skeleton variant="text" animation="wave" width={100} style={{ marginTop: "10px" }} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default SkeletonLoader