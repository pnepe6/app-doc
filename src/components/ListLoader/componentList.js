import React from 'react';

import A from '../../bsComponents/A';
import Abbr from '../../bsComponents/Abbr';
import Address from '../../bsComponents/Address';
import Alert from '../../bsComponents/Alert';
import Area from '../../bsComponents/Area';
import Button from '../../bsComponents/Button';
import Blockquote from '../../bsComponents/Blockquote';
import Breadcrumb from '../../bsComponents/Breadcrumb';
import BreadcrumbItem from '../../bsComponents/Breadcrumb/BreadcrumbItem';
import Close from '../../bsComponents/Close';
import Code from '../../bsComponents/Code';
import Dd from '../../bsComponents/Dd';
import Dfn from '../../bsComponents/Dfn';
import Details from '../../bsComponents/Details';
import Dt from '../../bsComponents/Dt';
import Fieldset from '../../bsComponents/Fieldset';
import H1 from '../../bsComponents/H1';
import H2 from '../../bsComponents/H2';
import H3 from '../../bsComponents/H3';
import H4 from '../../bsComponents/H4';
import H5 from '../../bsComponents/H5';
import H6 from '../../bsComponents/H6';
import Hr from '../../bsComponents/Hr';
import Img from '../../bsComponents/Img';
import Input from '../../bsComponents/Input';
import InputGroup from '../../bsComponents/InputGroup';
import IssueIcon from '../../bsComponents/IssueIcon';
import Kbd from '../../bsComponents/Kbd';
import Jumbotron from '../../bsComponents/Jumbotron';
import Legend from '../../bsComponents/Legend';
import Li from '../../bsComponents/Li';
import Ol from '../../bsComponents/Ol';
import Option from '../../bsComponents/Option';
import P from '../../bsComponents/P';
import Pre from '../../bsComponents/Pre';
import Progress from '../../bsComponents/Progress';
import ProgressBar from '../../bsComponents/Progress/ProgressBar';
import Samp from '../../bsComponents/Samp';
import Select from '../../bsComponents/Select';
import Small from '../../bsComponents/Small';
import Strong from '../../bsComponents/Strong';
import Summary from '../../bsComponents/Summary';
import Sub from '../../bsComponents/Sub';
import Sup from '../../bsComponents/Sup';
import Badge from '../../bsComponents/Badge';
import Form from '../../bsComponents/Form';
import Container from '../../bsComponents/Container';

const img771x250 = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22771%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20771%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_159ca0ce00e%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A39pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_159ca0ce00e%22%3E%3Crect%20width%3D%22771%22%20height%3D%22250%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.5%22%20y%3D%22142.4%22%3E771x250%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

const componentList = [
  <A>link</A>,
  <Abbr title="World Wide Web Consortium">W3C</Abbr>,
  <Address>adress</Address>,
  <Alert uncontrolled>Alert</Alert>,
  (
    <map name="planetmap">
      <Area shape="rect" coords="0,0,82,126" alt="Sun" href="https://www.w3schools.com/tags/sun.htm" />
      <Area shape="circle" coords="90,58,3" alt="Mercury" href="https://www.w3schools.com/tags/mercur.htm" />
      <Area shape="circle" coords="124,58,8" alt="Venus" href="https://www.w3schools.com/tags/venus.htm" />
    </map>
  ),
  (
    <Blockquote>
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
      <P className="blockquote-footer">Someone famous in something</P>
    </Blockquote>
  ),
  (
    <Breadcrumb>
      <BreadcrumbItem active>Home</BreadcrumbItem>
    </Breadcrumb>
  ),
  (
    <div>
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="success">success</Button>
      <Button color="info">info</Button>
      <Button color="warning">warning</Button>
      <Button color="danger">danger</Button>
      <Button color="link">link</Button>
    </div>
  ),
  <Close onDismiss={() => alert('Add your callback action.')} />,
  <Code>$ code sample</Code>,
  <Dd />,
  <Dfn>HTML</Dfn>,
  (
    <Details>
      <Summary>Copyright 2016-2018.</Summary>
      <P> - by YeuTech All Rights Reserved.</P>
      <P>All content and graphics on this web site are the property of the company YeuTech.</P>
    </Details>
  ),
  (
    <div>
      <Dt>Coffee</Dt>
      <Dd>Black hot drink</Dd>
    </div>
  ),
  (
    <Form>
      <Fieldset>
        Name: <Input type="text" />
        Email: <Input type="text" />
        Date of birth: <Input type="text" />
      </Fieldset>
    </Form>
  ),
  <H1>h1</H1>,
  <H2>h2</H2>,
  <H3>h3</H3>,
  <H4>h4</H4>,
  <H5>h5</H5>,
  <H6>h5</H6>,
  <Hr />,
  <Img alt="Responsive image" src={img771x250} className="my-2" />,
  (
    <Form>
      <Input type="text" name="text" placeholder="Insert text" />
      <Input type="select" name="select">
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </Input>
    </Form>
  ),
  (
    <InputGroup>
      <Input placeholder="username" />
      <Input placeholder="Check it out" />
    </InputGroup>
  ),
  <IssueIcon />,
  <Kbd>ctrl</Kbd>,
  (
    <Jumbotron>
      <H1 className="display-3">Hello, world!</H1>
      <P lead>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</P>
      <Hr className="my-4" />
      <P>It uses utility classes for typography and spacing to space content out within the larger container.</P>
      <P lead>
        <Button color="primary" size="lg" role="button">Learn more</Button>
      </P>
    </Jumbotron>
  ),
  (
    <Form>
      <Fieldset>
        <Legend>Register:</Legend>
        Name: <Input type="text" />
        Email: <Input type="text" />
        Date of birth: <Input type="text" />
      </Fieldset>
    </Form>
  ),
  (
    <Ol>
      <Li>Vestibulum id ligula porta felis euismod semper.</Li>
      <Li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Li>
    </Ol>
  ),
  <P>This is a paragraph</P>,
  (
    <Pre>
      <Code>{'<P>'}Sample text here...{'</P>'}
        {'<P>'}And another line of sample text here...{'</P>'}
      </Code>
    </Pre>
  ),
  (
    <div>
      <div className="text-center">0%</div>
      <Progress>
        <ProgressBar valueNow={0} valueMax={100} />
      </Progress>
      <div className="text-center">25%</div>
      <Progress>
        <ProgressBar valueNow={25} valueMax={100} height="1px" />
      </Progress>
      <div className="text-center">50%</div>
      <Progress>
        <ProgressBar className="bg-success" valueNow={50} valueMax={100} height="1px" />
      </Progress>
      <div className="text-center">75%</div>
      <Progress>
        <ProgressBar className="bg-info" valueNow={75} valueMax={100} height=".8rem" />
      </Progress>
      <div className="text-center">100%</div>
      <Progress>
        <ProgressBar valueNow={100} className="bg-warning" />
      </Progress>
      <div className="text-center">Grouped, striped or/and animated</div>
      <Progress>
        <ProgressBar valueNow={15} className="bg-danger" />
        <ProgressBar valueNow={30} striped className="bg-success" />
        <ProgressBar valueNow={20} striped animated className="bg-info" />
      </Progress>
    </div>
  ),
  <Samp>Sample output from a computer program</Samp>,
  (
    <Select>
      <Option value="bootstrap">Bootstrap</Option>
      <Option value="styled">Styled</Option>
      <Option value="from">From</Option>
      <Option value="yeutech">YeuTech</Option>
    </Select>
  ),
  <P>this is a <Small>small text</Small></P>,
  <P>this is a <Strong>strong text</Strong></P>,
  <P>This text contains <Sub>subscript</Sub> text.</P>,
  <P>This text contains <Sup>superscript</Sup> text.</P>,
  (
    <div>
      <H4>Heading <Badge>New</Badge></H4>
      <H5>Heading <Badge>New</Badge></H5>
      <H6>Heading <Badge>New</Badge></H6>
    </div>
  ),
  (
    <Container className="py-2">
      <div className="bg-primary">Header</div>
      <div className="w-25 bg-warning d-inline-block">Sidebar</div>
      <div className="w-75 bg-info d-inline-block">Body</div>
    </Container>
  ),
];

export default componentList;
