import {
  Container,
  Row,
  Col,
  Table,
  Card,
  CardText,
  CardTitle,
  Button
} from "reactstrap";
import { BuildingData } from "../data/data";

const Building = () => {
  return (
    <div className="building">
      <h4>大樓資訊</h4>
      <Container>
        <Row>
          <Col>
            <Card
              body
              inverse
              style={{
                backgroundColor: "#000000",
                borderColor: "#333",
                paddingBottom: "0px"
              }}
            >
              <CardTitle>目前狀態:</CardTitle>
              <CardText>OFF</CardText>
            </Card>
          </Col>
          <Col>
            <Card
              body
              inverse
              style={{
                backgroundColor: "#000000",
                borderColor: "#333",
                paddingBottom: "0px"
              }}
            >
              <CardTitle>下次維護:</CardTitle>
              <CardText>35天</CardText>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card
              body
              inverse
              style={{
                backgroundColor: "#000000",
                borderColor: "#333",
                paddingBottom: "0px"
              }}
            >
              <CardTitle>下次保養日期</CardTitle>
              <CardText style={{ fontSize: "1.25rem" }}>2022-11-01</CardText>
              <Button>登錄</Button>
            </Card>
          </Col>
          <Col>
            <Card
              body
              inverse
              style={{
                backgroundColor: "#000000",
                borderColor: "#333",
                paddingBottom: "0px"
              }}
            >
              <CardTitle>下次啟動日期</CardTitle>
              <CardText style={{ fontSize: "1.25rem" }}>2022-11-15</CardText>
              <Button>登錄</Button>
            </Card>
          </Col>
        </Row>

        <Row>
          <h4>紀錄</h4>
          <Table dark>
            <thead>
              <tr>
                <th>#</th>
                <th>日期</th>
                <th>事件</th>
                <th>備註</th>
                <th>人員</th>
              </tr>
            </thead>
            <tbody>
              {BuildingData.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.date}</td>
                  <td>{item.activities}</td>
                  <td>{item.notes}</td>
                  <td>{item.applicant}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};
export default Building;
