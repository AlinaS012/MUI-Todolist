import Todo from "../todo/Todo";
import { Stack } from "@mui/material";
import AddTask from "../addtask/AddTask";

// const textList = [
//     "Add task",
//     "Add task",
//     "Added task"
// ]
// interface textListProp {
//     textList: string[];
// }

const TodoList = ({ textList }) => {
    return (<><Stack
        display={'flex'}
        flexDirection={'column'}
        sx={{
            width: {
                xs: '90%', md: '90%', lg: '90%'//lg: '75%' 
            }
        }}
        justifyContent={'center'}
        // alignItems={'center'}
        margin={'0 auto'}
        mt={0} mb={0}
    >
        {textList.map(
            (item) => <Todo text={item} />
        )}
    </Stack>
        <AddTask sx={{
            width: {
                xs: '90%', md: '90%', lg: '90%'//lg: '75%' 
            },
            margin: '0 auto', display: 'flex', flexDirection: 'row',
            gap: '1.5rem', alignItems: 'center', mb: 1
        }}
        />
    </>)
}

export default TodoList;