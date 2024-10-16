import { useState } from 'react';
import { Box, Button, Text, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface StepperFormProps {
  onComplete: () => void; // Prop to signal completion
}

export default function Stepper({ onComplete }: StepperFormProps) {
  const [step, setStep] = useState(1); // Add state to track the current step
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to go to the next step
  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else if (step === 5) {
      // Call onComplete and navigate to Dashboard when reaching the last step
      onComplete();
      navigate('/dashboard'); // Change '/dashboard' to the actual route of your Dashboard component
    }
  };

  // Function to go back to the previous step
  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div style={{ backgroundColor: 'rgba(103, 66, 66, 0.8)', minHeight: '100vh' }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap');`}
        {`@import url('https://fonts.googleapis.com/css2?family=Dokdo');`}
        {`@import url('https://fonts.googleapis.com/css2?family=Oi');`}
      </style>
      <Flex justify="center" align="center" style={{ height: '80vh' }}>
        <Box
          style={{
            padding: '40px',
            width: '450px', // Increased width for consistency
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            textAlign: 'center',
            fontFamily: "'Rubik Doodle Shadow', cursive", 
          }}
        >
          {/* Display the step number */}
          <Text size="lg" mb="md" style={{ color: 'white', fontWeight: 600 , fontFamily: "'Rubik Doodle Shadow', cursive",  }}>
            {`Need a social media manager?`}
          </Text>

          {/* Render different content based on the current step */}
          {step === 1 && (
            <>
              <Text size="lg" mb="md" style={{ color: 'white' , fontFamily: "'Dokdo",  }}>
                Hi, my name is Anthony Kelechi Kelvin
              </Text>
              <Text size="lg" mb="md" style={{ color: 'white' }}>
                I am an experienced frontend developer, brand adviser, and moderator.
              </Text>

              <Button
                style={{
                  marginTop: '20px',
                  backgroundColor: '#79970b',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '12px 20px',
                  width: '100%',
                  fontWeight: 600,
                }}
                onClick={nextStep} // Go to the next step
              >
                Continue
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <Text size="lg" mb="md" style={{ color: 'white' }}>
                I love working on startups & creating content.
              </Text>

              <Flex justify="space-between" mt="lg">
                <Button
                  onClick={previousStep}
                  variant="outline"
                  style={{
                    borderRadius: '8px',
                    padding: '10px 20px',
                    width: '45%',
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={nextStep}
                  style={{
                    backgroundColor: '#7c7c10',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    width: '45%',
                    fontWeight: 600,
                  }}
                >
                  Continue
                </Button>
              </Flex>
            </>
          )}

          {step === 3 && (
            <>
              <Text size="lg" mb="md" style={{ color: 'white' }}>
                Kindly get in touch with me.
              </Text>
              <Text size="sm" color="white" mb="md">
                Email: gradelearninginteractive@gmail.com
              </Text>

              <Flex justify="space-between" mt="lg">
                <Button
                  onClick={previousStep}
                  variant="outline"
                  style={{
                    borderRadius: '8px',
                    padding: '10px 20px',
                    width: '45%',
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={nextStep}
                  style={{
                    backgroundColor: '#1ae892',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    width: '45%',
                    fontWeight: 600,
                  }}
                >
                  Continue
                </Button>
              </Flex>
            </>
          )}

          {step === 4 && (
            <>
              <Text size="lg" mb="md" style={{ color: 'white' }}>
                Other socials
              </Text>
              <Text size="sm" color="white" mb="md">
                X: @0x80f    
              </Text>
              <Text size="sm" color="white" mb="md">
           Telegram: @mollysznszn     
              </Text>
              <Text size="sm" color="white" mb="md">
                 Instagram: muffledbird, m_tgoky
              </Text>

              <Flex justify="space-between" mt="lg">
                <Button
                  onClick={previousStep}
                  variant="outline"
                  style={{
                    borderRadius: '8px',
                    padding: '10px 20px',
                    width: '45%',
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={nextStep}
                  style={{
                    backgroundColor: '#bf6017',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    width: '45%',
                    fontWeight: 600,
                  }}
                >
                  Continue
                </Button>
              </Flex>
            </>
          )}

          {step === 5 && (
            <>
              <Text size="lg" mb="md" style={{ color: 'white' }}>
                And that's a wrap!
              </Text>
              <Text size="sm" color="white" mb="md">
                Looking forward to working with your brand!
              </Text>

              <Flex justify="space-between" mt="lg">
                <Button
                  onClick={previousStep}
                  variant="outline"
                  style={{
                    borderRadius: '8px',
                    padding: '10px 20px',
                    width: '45%',
                  }}
                >
                  Back
                </Button>
              </Flex>
            </>
          )}
        </Box>
      </Flex>
    </div>
  );
}
