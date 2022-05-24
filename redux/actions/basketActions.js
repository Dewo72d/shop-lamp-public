// Actions Creator

export const addProduct = (payload) => (dispath) => {
	dispath({
		type: "ADD",
		payload: payload,
	});
};

export const removeProduct = (payload) => (dispath) => {
	dispath({
		type: "REMOVE",
		payload: payload,
	});
};

export const wipeProducts = (payload) => (dispath) => {
	dispath({
		type: "WIPE",
		payload: payload,
	});
};

export const totalSum = (payload) => (dispath) => {
    dispath({
        type:"TOTAL",
        payload: payload
    })
}

export const totalAmount = (payload) => (dispath) => {
    dispath({
        type:"AMOUNT",
        payload: payload
    })
}

export const counterClick = (payload) => (dispath) => {
    dispath({
        type:"COUNTER",
        payload: payload
    })
}