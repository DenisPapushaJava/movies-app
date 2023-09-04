import { Alert } from 'antd';
import './error.css';

function ErrorIndicator({ errorMessage }) {
  return <Alert message="Something went wrong! " description={errorMessage} type="error" className="alert-error" />;
}

export default ErrorIndicator;
