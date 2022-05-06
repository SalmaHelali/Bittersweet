import { Facebook, Instagram, Phone } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <div
      className="sty"
      style={{
        // position: 'fixed',
        left: "0",
        bottom: " 0",
        width: "100%",
      }}
    >
      <Container>
        <Left>
          <Logo>Bittersweet accessories.</Logo>
          {/* <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc> */}
          <SocialContainer>
            <SocialIcon color="3B5999">
              <a
                href="https://www.facebook.com/Bittersweet-accessories-109762908323433"
                target="_blank"
              >
                <Facebook />
              </a>
            </SocialIcon>
            <SocialIcon color="E4405F">
              <a
                href="https://www.instagram.com/bittersweetaccess/?hl=fr"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <Instagram />
              </a>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem></ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> 27731264
          </ContactItem>
          {/* <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem> */}
          {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
        </Right>
      </Container>
    </div>
  );
};

export default Footer;
