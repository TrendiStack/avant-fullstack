import Layout from '../components/Layout';

const Verify = () => {
  return (
    <Layout className="py-20">
      <h1 className="text-center">
        Please check your email to verify your account. If you do not receive an
        email within 5 minutes, please check your spam folder. If you still do
        not receive an email, please contact us
        <br />@{' '}
        <a className="font-semibold" href="mailto:avantclothing@avant.com">
          avantclothing@avant.com
        </a>
      </h1>
    </Layout>
  );
};

export default Verify;
