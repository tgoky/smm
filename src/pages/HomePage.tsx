import { Box, Flex, Button, Menu, Text, Modal } from '@mantine/core';
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import Typical from 'react-typical';
import Stepper from './Stepper'; // Import the Stepper component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './home.css';

const countries = [
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  { name: 'United States', code: 'US', flag: '🇺🇸' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵' },
  { name: 'India', code: 'IN', flag: '🇮🇳' },
  { name: 'South Africa', code: 'ZA', flag: '🇿🇦' },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷' },
];

export default function HomePage() {
  // const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [modalOpened, setModalOpened] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null); // Set initial state for hoveredCountry
  const navigate = useNavigate(); // Initialize useNavigate for routing

  // const handleCountryChange = (country: { name: string; code: string; flag: string }) => {
  //   setSelectedCountry(country);
  //   setModalOpened(false); // Close modal after selecting country
  // };

  const goToDashboard = () => {
    navigate('/dashboard'); // Navigate to Dashboard
  };

  // Define the onComplete function to handle the completion of the stepper
  const handleComplete = () => {
    console.log('Stepper completed!');
    goToDashboard(); // Optionally navigate to the dashboard on completion
  };

  return (
    <div style={{ backgroundColor: 'rgba(103, 66, 66, 0.8)', position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
         <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap');`}
        {`@import url('https://fonts.googleapis.com/css2?family=Dokdo');`}
        {`@import url('https://fonts.googleapis.com/css2?family=Oi');`}
      </style>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: 'rgba(103, 66, 66, 0.8)',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          fontFamily: "'Rubik Doodle Shadow', cursive", // Apply font
        }}
      >
        {/* Left side (Country Dropdown) */}
        {/* <Button
          variant="outline"
          style={{ color: 'white', display: 'flex', alignItems: 'center', borderRadius: '20px' }}
          onClick={() => setModalOpened(true)}
        >
          <span style={{ marginRight: 5 }}>{selectedCountry.flag}</span>
          <Text>{selectedCountry.name}</Text>
          <IconChevronDown size={16} style={{ marginLeft: 5 }} />
        </Button> */}

        {/* Right side (Menus) */}
        <Flex gap="md">
          {/* Products Menu */}
          <Menu trigger="hover" width="100%">
            <Menu.Target>
              <Button variant="subtle" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                Social Media<IconChevronDown size={16} style={{ marginLeft: 5 }} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' , fontFamily: "Dokdo", }}>Content Creation</Text>
                <Text size="xs" color="dimmed" style={{fontFamily: 'Oi', }}>
                 Create engaging content that resonates with your audience.
                </Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' , fontFamily: "Dokdo",  }}>Communities</Text>
                <Text size="xs" color="dimmed" style={{fontFamily: 'Oi', }}>
                  Resonate deeply with communities and find cultural balances to always keep them engaged
                </Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold', fontFamily: "Dokdo",  }}>Growth & Insights</Text>
                <Text size="xs" color="dimmed" style={{fontFamily: 'Oi', }}>
                  Experience organic community growth !
                </Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
      
          {/* Company Menu */}
          <Menu trigger="hover" width="100%">
            <Menu.Target>
              <Button variant="subtle" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                Virtual Services <IconChevronDown size={16} style={{ marginLeft: 5 }} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold', fontFamily: "Dokdo",   }}>Daily Updates</Text>
                <Text size="xs" color="dimmed" style={{fontFamily: 'Oi', }}>Follow daily and ensure up-to-date activities</Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold', fontFamily: "Dokdo",  }}>Rapid Response</Text>
                <Text size="xs" color="dimmed" style={{fontFamily: 'Oi', }}>Always one call away</Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' , fontFamily: "Dokdo",  }}>Pressure & Deadlines</Text>
                <Text size="xs" color="dimmed" style={{fontFamily: 'Oi', }}>Working Routine to handle pressure and deadlines</Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          {/* Support Menu */}
          <Menu trigger="hover" width="100%">
            <Menu.Target>
              <Button variant="subtle" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                Brands <IconChevronDown size={16} style={{ marginLeft: 5 }} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' ,     fontFamily: "'Rubik Doodle Shadow', cursive",  }}>Brand Theming</Text>
                <Text size="xs" color="dimmed"></Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' ,     fontFamily: "'Rubik Doodle Shadow', cursive", }}>Brand Management</Text>
                <Text size="xs" color="dimmed">.</Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' ,     fontFamily: "'Rubik Doodle Shadow', cursive", }}>Brand Culture</Text>
                <Text size="xs" color="dimmed"></Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          {/* Community Menu */}
          {/* <Menu trigger="hover" width="100%">
            <Menu.Target>
              <Button variant="subtle" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                Community <IconChevronDown size={16} style={{ marginLeft: 5 }} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Developers</Text>
                <Text size="xs" color="dimmed">Explore our API and developer resources.</Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Blog</Text>
                <Text size="xs" color="dimmed">Read the latest updates from our community.</Text>
              </Menu.Item>
              <Menu.Item>
                <Text style={{ fontWeight: 'bold' }}>Partners</Text>
                <Text size="xs" color="dimmed">Join our partner ecosystem and grow together.</Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu> */}
        </Flex>
      </Box>

      {/* Typing effect for introducing blocks */}
      <div className="dd">
        <Typical
          loop={Infinity}
          wrapper="p"
          steps={[
            'Hi ! hello my name is Kelvin', 2500,
            'Contact me for Social Management.', 2500,
            'andddd Virtual Services', 2500,
          ]}
        />
      </div>

      {/* Render Stepper component and pass onComplete */}
      <Stepper onComplete={handleComplete} />

      {/* Button to navigate to Dashboard */}
      <Button
        onClick={goToDashboard} // Navigate to Dashboard on click
        style={{
          marginTop: '20px',
          color: 'white',
          backgroundColor: 'green',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Go to Dashboard
      </Button>

      {/* Country selection modal */}
      <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Select a Country">
        {countries.map((country) => (
          <Button
            key={country.code}
            // onClick={() => handleCountryChange(country)}
            onMouseEnter={() => setHoveredCountry(country.name)}
            onMouseLeave={() => setHoveredCountry(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '5px 0',
              backgroundColor: hoveredCountry === country.name ? 'rgba(255, 255, 255, 0.2)' : 'transparent', // Highlight on hover
              color: 'white',
              width: '100%',
            }}
          >
            <Text>
              {country.flag} {country.name}
            </Text>
            <Text size="sm" color="dimmed">
              {country.code}
            </Text>
          </Button>
        ))}
      </Modal>
    </div>
  );
}
