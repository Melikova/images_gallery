import Container from 'react-bootstrap/Container';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoReact, IoLogoFirebase } from 'react-icons/io5';
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { FaPhp, FaLaravel, FaSass, FaNode } from "react-icons/fa6";
import { SiCodeigniter, SiExpress, SiMocha, SiChai } from "react-icons/si";
import { TbBrandBootstrap, TbBrandTypescript, TbBrandNextjs, TbBrandDocker, TbBrandCypress } from "react-icons/tb";

export function SkillsComp(){
    return(
        <Container fluid className='px-2 px-sm-3 px-md-4 px-lg-5 my-5 py-5' style={{background: '#FFCB2E'}}>
        <div className='h3 text-center fw-bolder text-secondary'>MY SKILLS</div>
        <h1 className='text-center my-4 text-secondary'>
            <FaSass className='mx-3'/>
            <TbBrandBootstrap className='mx-3'/>
            <IoLogoJavascript className='mx-3'/>
            <TbBrandCypress className='mx-3'/>
            <SiMocha className='mx-3'/>
            <SiChai className='mx-3'/>
            <TbBrandTypescript className='mx-3'/>
            <FaNode className='mx-3'/>
            <SiExpress className='mx-3'/>
            <TbBrandNextjs className='mx-3'/>
            <IoLogoReact className='mx-3'/>
            <IoLogoFirebase className='mx-3'/>
            <BiLogoMongodb className='mx-3'/>
            <GrMysql className='mx-3'/>
            <FaPhp className='mx-3'/>
            <FaLaravel className='mx-3'/>
            <SiCodeigniter className='mx-3'/>
            <TbBrandDocker className='mx-3'/>
        </h1>
        </Container>
    )
}