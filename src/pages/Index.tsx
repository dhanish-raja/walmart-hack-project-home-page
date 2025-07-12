import HomePage from "../components/HomePage";

const Index = () => {
  console.log("Index component rendering");
  return (
    <div style={{ background: 'red', color: 'white', padding: '20px' }}>
      <h1>Test - Can you see this?</h1>
      <HomePage />
    </div>
  );
};

export default Index;
