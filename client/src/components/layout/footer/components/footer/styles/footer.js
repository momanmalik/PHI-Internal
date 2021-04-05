import styled from "styled-components";
export const Container = styled.div`
  padding: 20px 60px;
  background: #fff;
  padding-left: 10%;
  padding-right: 10%;
  //radial-gradient(circle, rgba(0, 181, 204, 1)0%, rgba(52, 152, 219, 1)100%);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: 'center';
  @media only screen and (min-width: 600px) {
    /* For tablets: */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    /* For desktop: */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: 'center';
  }
`;

export const Link = styled.a`
  color: #000000;

  font-size: 19px;
  text-decoration: none;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
  
`;

export const linkStyles = {
  color: "#000000",
  fontSize: "19px",
  textDecoration: "none",
  "&:hover": {
    color: "#ff9c00",
    transition: "200ms ease-in",
  },
};

export const Title = styled.p`
  font-size: 19px;
  color: #000000;
  font-weight: bold;
`;
