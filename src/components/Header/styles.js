import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  padding: 24px 123px;
  gap: 64px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_700};

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > a {
    font-size: 14px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 35px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  }

  > div {
    display: flex;
    align-items: end;
    flex-direction: column;
    margin-right: 9px;
    line-height: 24px;

    strong {
      font-size: 14px;
      font-weight: 700;

      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }

    span {
      font-size: 14px;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`;