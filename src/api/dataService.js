

export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "John",
          amt: 120,
          transactionDt: "05-01-2022"
        },
        {
          custid: 1,
          name: "John",
          amt: 75,
          transactionDt: "05-21-2022"
        },
        {
          custid: 1,
          name: "John",
          amt: 94,
          transactionDt: "05-21-2022"
        },
        {
          custid: 1,
          name: "John",
          amt: 10,
          transactionDt: "06-01-2022"
        },
        {
          custid: 1,
          name: "John",
          amt: 75,
          transactionDt: "06-21-2022"
        },
        {
          custid: 1,
          name: "John",
          amt: 200,
          transactionDt: "07-01-2022"
        },
        {
          custid: 1,
          name: "John",
          amt: 1,
          transactionDt: "07-04-2022"
        },
        {
          custid: 1,
          name: "John",
          amt: 80,
          transactionDt: "07-03-2022"
        },
        {
          custid: 1,
          name: "John",
          amt: 224,
          transactionDt: "07-21-2022"
        },
        {
          custid: 2,
          name: "Jenny",
          amt: 125,
          transactionDt: "05-01-2022"
        },
        {
          custid: 2,
          name: "Jenny",
          amt: 75,
          transactionDt: "05-21-2022"
        },
        {
          custid: 2,
          name: "Jenny",
          amt: 10,
          transactionDt: "06-01-2022"
        },
        {
          custid: 2,
          name: "Jenny",
          amt: 75,
          transactionDt: "06-21-2022"
        },
        {
          custid: 2,
          name: "Jenny",
          amt: 200,
          transactionDt: "07-01-2022"
        },
        {
          custid: 2,
          name: "Jenny",
          amt: 224,
          transactionDt: "07-21-2022"
        },
        {
          custid: 3,
          name: "Harry",
          amt: 120,
          transactionDt: "06-21-2022"
        }
    ]
  );
};