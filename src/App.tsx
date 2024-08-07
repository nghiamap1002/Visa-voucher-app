import { makeStyles } from '@mui/styles';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RootRoutes from 'routes/RootRoutes';
import ThemeProvider from './themes';

const useStyles = makeStyles(() => ({
  customToast: {
    '& .Toastify__toast': {
      borderRadius: '8px !important',
      boxShadow: '0px 8px 16px rgba(145, 158, 171, 0.16)',
      '& .Toastify__toast-icon': {
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '12px',
        '& svg': {
          width: '20px',
          height: '20px',
        },
      },
      '&--error': {
        '& .Toastify__toast-body': {
          color: '#7A0C2E',
          '& .Toastify__toast-icon': {
            background: 'rgba(221, 76, 35, 0.16)',
          },
        },
      },
      '&--success': {
        '& .Toastify__toast-body': {
          color: '#08660D',
          '& .Toastify__toast-icon': {
            background: 'rgba(84, 214, 44, 0.16)',
          },
        },
      },
      '&--info': {
        '& .Toastify__toast-body': {
          color: '#061340',
          '& .Toastify__toast-icon': {
            background: 'linear-gradient(180deg, rgba(11, 112, 225, 0.16) 0%, rgba(14, 115, 228, 0.16) 71.87%)',
          },
        },
      },
      '&--warning': {
        '& .Toastify__toast-body': {
          color: '#7A4F01',
          '& .Toastify__toast-icon': {
            background: 'rgba(255, 193, 7, 0.16)',
          },
        },
      },
    },
  },
}));

function App() {
  const classes: any = useStyles();

  return (
    <ThemeProvider>
      <ToastContainer
        className={classes.customToast}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <RootRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
