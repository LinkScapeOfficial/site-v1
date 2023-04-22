import { Box } from 'theme-ui';

const App = () => {
  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <iframe
        src="https://bank.hackclub.com/linkscape"
        style={{ border: 'none' }}
        name="donateFrame"
        scrolling="yes"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        height="100%"
        width="100%"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default App;
