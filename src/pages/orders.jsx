function Orders() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserOrderDetails();
        setTimeout(() => setLoading(false), 2000);
        window.scrollTo({ top: 0, behavior: "smooth" });
       // delayLoader();
    }, []);

    console.log("id", id);

    async function getUserOrderDetails() {
        //    const API = `http://localhost/websites/mamapi/Api/orderdetails.php?id=${id}`;
        const API = `http://api.afrimamafarms.com/Api/userOrderDetails.php?id=${id} `;
        //  const API=`https://afrimamafarms.com/endpoint/Api/orderdetails.php?id=${id} `;
        const res = await axios.get(API, {
            headers: {
                "content-type": "application/json",
            },
        });
        setInputs(res.data);
        console.log("data", res.data);
        // console.log("response", res);
        //   console.log("orderstate", input);
    }


    if (loading) {
        return <div class="loader" style={{ margin: "50vh auto" }}></div>
    }

    // If page is not in loading state, display page.
    else {


        return (
            <>
            </>
        );

    }
}

export default Orders;