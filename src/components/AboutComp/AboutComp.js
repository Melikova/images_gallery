import Container from 'react-bootstrap/Container';

export function AboutComp(){
    return(
        <Container fluid className='px-2 px-sm-3 px-md-4 px-lg-5 my-5'>
        <div className='h2 text-center mb-4 fw-bolder'>ABOUT ME</div>
        <div className='text-center py-5 fs-5' style={{color:'#8D8A88'}}>
            <p>Hello! I'm Mehin Melikova, a passionate full stack developer and QA engineer with a strong focus on delivering high-quality software solutions. With 4 years of experience in the software industry, I have developed a diverse skill set that allows me to excel in both development and quality assurance.</p>
            <p>What sets me apart is my ability to bridge the gap between development and quality assurance. I understand the importance of delivering software that not only meets functional requirements but also exceeds user expectations in terms of usability, performance, and security. I am a strong advocate for adopting best practices in software engineering, including agile methodologies, continuous integration, and test-driven development.</p>
            <p>Throughout my career, I have had the opportunity to collaborate with cross-functional teams, communicate effectively, and adapt to dynamic project requirements. I am passionate about staying updated with the latest industry trends and continuously enhancing my technical skills to deliver cutting-edge solutions.</p>
        </div>
        </Container>
    )
}