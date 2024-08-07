import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: '10px',
    lineHeight: '18px',
    letterSpacing: '0.5px',
    fontWeight: '400',
    color: '#D41414',
    // position: 'relative',
    // top: '-5px'
  },
}));

const TextError = ({ children }: any) => {
  const styles = useStyles();

  return <span className={styles.root}>{children}</span>;
};

export default TextError;
