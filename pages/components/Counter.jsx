import defaultValues from "../assets/defaultValues.json";
import { useDispatch, useSelector } from "react-redux";
import { counterClick } from "../../redux/actions/basketActions";

export default function Counter({ stateCount }) {
	const count = useSelector((state) => state.basketReducer.counter);
	const dispatch = useDispatch();
    
	return (
		<div className="flex flex-row gap-4 text-xl ">
			<button
				className="border rounded-md hover:border-blue-600 w-8 "
				onClick={() =>
					count === 1
						? dispatch(counterClick(1))
						: dispatch(counterClick(count - 1))
				}
			>
				-
			</button>
			<div className="ml-2 mr-2 md:ml-0 md:mr-0">{count}</div>
			<button
				className="border rounded-md hover:border-blue-600 w-8"
				onClick={() => {
					count >= 10
						? dispatch(counterClick(10))
						: dispatch(counterClick(count + 1));
				}}
			>
				+
			</button>
		</div>
	);
}

Counter.defaultProps = {
	stateCount: defaultValues.state,
};

