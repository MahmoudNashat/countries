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
                            <Skeleton variant="text" animation="wave" width={150} />
                            <Skeleton variant="text" animation="wave" width={150} />
                            <Skeleton variant="text" animation="wave" width={150} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default SkeletonLoader