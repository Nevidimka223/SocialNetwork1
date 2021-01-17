import React, {useState} from 'react';
import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body.jsx';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary'

function PageContainer() {
    const [bodyContent, setContent] = useState(null);
    const [userName, setUserName] = useState('Name Surname');
  
    const switchContent = (bodyContent) => () => setContent(bodyContent);
    
    const handleSubmit = event => {
      event.preventDefault();
      setUserName(`${event.target[0].value}`);
    };

  return (
    <>
      <ErrorBoundary>
        <Header switchContent={switchContent} userName={userName} />
        <Body bodyContent={bodyContent} handleSubmit={handleSubmit} />
      </ErrorBoundary>
    </>
);
}

export default PageContainer;
