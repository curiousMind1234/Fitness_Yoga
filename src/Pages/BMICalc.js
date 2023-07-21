import React, {  useState } from 'react';
import {
    Box, Button, Stack, Typography, TextField, Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { fetchData, bmiOptions } from '../utils/fetchData';
import SimpleDialog from '../components/SimpleDialog';


const BMICalc = () => {
    const [bmiData, setBmiData] = useState(0)
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [range, setRange] = useState('');
    const [age, setAge] = useState("")
    const [health, setHealth] = useState('Not Calcualted');
    const [healthyBmiRange, setHealthyBmiRange] = useState('Not Calcualted');
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 4000);
    };


    const fetchBmiData = async () => {
        if ((weight > 40 && weight < 160) && (height > 130 && height < 230) && (age > 0 && age < 80)) {
            const BMIData = await fetchData(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`, bmiOptions);

            if (BMIData.status_code === 200) {
                console.log(BMIData);
                setBmiData(BMIData.data.bmi);
                setHealth(BMIData.data.health);
                setHealthyBmiRange(BMIData.data.healthy_bmi_range);
            } else {
                alert('Unable to fetch data from API');
            }
        }
    }
    fetchBmiData();

    return (
        <Stack direction="row" display="flex" justifyContent="space-evenly"
            sx={{
                mb: { xs: '0px', lg: '70px', md: "10px" },
                mt: { lg: "120px", xs: '100px', md: "100px" }
            }}
            p="30px"
            borderRadius="20px"
            position="relative">
            <Card sx={{ minWidth: 275 }} className="bmi" borderRadius="30px">
                <CardContent>
                    <Typography fontWeight={600}
                        sx={{
                            fontSize: { lg: '33px', xs: '20px', md: '25px' },
                            mb: { lg: '45px', xs: '25px' },
                            mt: { lg: '0', xs: '10px' }
                        }}
                        textAlign="center" color="#fff" alignItems="center" justifyContent="center">
                        Calculate your BMI Score
                    </Typography>
                    <FormHelperText id="outlined-weight-helper-text"
                        sx={{
                            fontSize: { lg: '22px', xs: '14px', md: '19px' },
                            ml: { lg: '4px', sm: '2px', xs: '10px' }, mb: "10px",
                            color: '#fff',
                            fontWeight: '500',

                        }} >Age</FormHelperText>
                    <TextField
                        sx={{
                            input: {
                                fontWeight: '400',
                                border: '1px solid #fff',
                                borderRadius: '4px',
                                color: "#fff",
                                height: "3px",

                            },
                            width: { lg: '180px', xs: '90px' },
                            borderRadius: '40px'
                        }}
                        value={age}
                        onChange={(e) => { setAge(e.target.value) }}
                        type="text"
                    />

                    <Stack direction="row" justifyContent="space-between">
                        <Stack>
                            <FormHelperText id="outlined-weight-helper-text"
                                sx={{
                                    fontSize: { lg: '22px', xs: '14px', md: '19px' },
                                    ml: { lg: '4px', sm: '2px', xs: '10px' }, mb: "10px",
                                    color: '#fff',
                                    fontWeight: '500',
                                    marginTop: "10px"
                                }} >Weight (in kgs)</FormHelperText>

                            <TextField
                                sx={{
                                    input: {
                                        fontWeight: '400',
                                        border: '1px solid #fff',
                                        borderRadius: '4px',
                                        color: "#fff",
                                        height: "3px",
                                    },
                                    width: { lg: '180px', xs: '90px', md: "140px" },
                                    borderRadius: '40px'
                                }}
                                value={weight}
                                onChange={(e) => { setWeight(e.target.value) }}
                            />
                        </Stack>

                        <Stack>
                            <FormHelperText id="outlined-weight-helper-text"
                                sx={{
                                    fontSize: { lg: '22px', xs: '14px', md: '19px' },
                                    ml: { lg: '4px', sm: '2px', xs: '10px' }, mb: "10px",
                                    color: '#fff',
                                    fontWeight: '500',
                                    marginTop: "10px"
                                }} >Height (in cms)</FormHelperText>

                            <TextField
                                sx={{
                                    input: {
                                        fontWeight: '400',
                                        border: '1px solid #fff',
                                        borderRadius: '4px',
                                        color: "#fff",
                                        height: "3px",
                                    },
                                    width: { lg: '180px', xs: '90px', md: "140px" },
                                    borderRadius: '40px'
                                }}
                                value={height}
                                onChange={(e) => { setHeight(e.target.value) }}
                            />
                        </Stack>
                    </Stack>
                </CardContent>
                <CardActions >
                    <Button
                        sx={{
                            color: "#fff",
                            textTransform: 'none',
                            width: { lg: '150px', xs: '100px' },
                            fontSize: { lg: '20px', xs: '14px' },
                            height: '40px',
                            ml: { lg: "140px", xs: "70px", md: "100px" }
                        }}
                        className="search-btn"
                        padding="20px"
                        onClick={handleClick}>

                        Calculate
                    </Button>
                    {open && (<SimpleDialog bmiResult={bmiData} health={health} healthyRange={healthyBmiRange}/>)}
                </CardActions>
            </Card>


            {/* <Card sx={{ minWidth: 275 }} className="bmi" borderRadius="30px">
                <CardContent>
                    <Typography fontWeight={600}
                        sx={{
                            fontSize: { lg: '33px', xs: '20px', md: '25px' },
                            mb: { lg: '45px', xs: '25px' },
                            mt: { lg: '0', xs: '10px' }
                        }}
                        textAlign="center" color="#fff" alignItems="center" justifyContent="center">
                        Calculate your BMI Score
                    </Typography>
                    <FormHelperText id="outlined-weight-helper-text"
                        sx={{
                            fontSize: { lg: '22px', xs: '14px', md: '19px' },
                            ml: { lg: '4px', sm: '2px', xs: '10px' }, mb: "10px",
                            color: '#fff',
                            fontWeight: '500',

                        }} >Age</FormHelperText>
                    <TextField
                        sx={{
                            input: {
                                fontWeight: '400',
                                border: '1px solid #fff',
                                borderRadius: '4px',
                                color: "#fff",
                                height: "3px",

                            },
                            width: { lg: '180px', xs: '90px' },
                            borderRadius: '40px'
                        }}
                        value={age}
                        onChange={(e) => { setAge(e.target.value) }}
                        type="text"
                    />

                    <Stack direction="row" justifyContent="space-between">
                        <Stack>
                            <FormHelperText id="outlined-weight-helper-text"
                                sx={{
                                    fontSize: { lg: '22px', xs: '14px', md: '19px' },
                                    ml: { lg: '4px', sm: '2px', xs: '10px' }, mb: "10px",
                                    color: '#fff',
                                    fontWeight: '500',
                                    marginTop: "10px"
                                }} >Weight (in kgs)</FormHelperText>

                            <TextField
                                sx={{
                                    input: {
                                        fontWeight: '400',
                                        border: '1px solid #fff',
                                        borderRadius: '4px',
                                        color: "#fff",
                                        height: "3px",
                                    },
                                    width: { lg: '180px', xs: '90px', md: "140px" },
                                    borderRadius: '40px'
                                }}
                                value={weight}
                                onChange={(e) => { setWeight(e.target.value) }}
                            />
                        </Stack>

                        <Stack>
                            <FormHelperText id="outlined-weight-helper-text"
                                sx={{
                                    fontSize: { lg: '22px', xs: '14px', md: '19px' },
                                    ml: { lg: '4px', sm: '2px', xs: '10px' }, mb: "10px",
                                    color: '#fff',
                                    fontWeight: '500',
                                    marginTop: "10px"
                                }} >Height (in cms)</FormHelperText>

                            <TextField
                                sx={{
                                    input: {
                                        fontWeight: '400',
                                        border: '1px solid #fff',
                                        borderRadius: '4px',
                                        color: "#fff",
                                        height: "3px",
                                    },
                                    width: { lg: '180px', xs: '90px', md: "140px" },
                                    borderRadius: '40px'
                                }}
                                value={height}
                                onChange={(e) => { setHeight(e.target.value) }}
                            />
                        </Stack>
                    </Stack>
                </CardContent>
                <CardActions >
                    <Button
                        sx={{
                            color: "#fff",
                            textTransform: 'none',
                            width: { lg: '150px', xs: '100px' },
                            fontSize: { lg: '20px', xs: '14px' },
                            height: '40px',
                            ml: { lg: "140px", xs: "70px", md: "100px" }
                        }}
                        className="search-btn"
                        onClick={handleClick}>
                        Calculate
                    </Button>
                    {open && (<SimpleDialog bmiResult={bmiData} health={health} healthyRange={healthyBmiRange} />)}
                </CardActions>
            </Card> */}
        </Stack>
    )
}

export default BMICalc
