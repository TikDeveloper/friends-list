import {
  Friend,
  friendsSelector,
  tableColumns,
  totalQntFriendsSelector,
} from '@entities/friend';
import { RemoveFriendBtn } from '@features/friend/remove';
import { PAGE_PATH } from '@shared/lib/react-router';
import { useAppSelector } from '@shared/model';
import { Table, TableRow } from '@shared/ui';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FriendList = () => {
  const friendsMap = useAppSelector(friendsSelector);
  const totalFriends = useAppSelector(totalQntFriendsSelector);

  const actionsSlot = (row: Friend) => {
    return (
      <div className="d-flex gap-2">
        <Link
          to={PAGE_PATH.friends.edit.route(row.id)}
          className="btn btn-warning"
        >
          Edit
        </Link>
        <RemoveFriendBtn friend={row} />
      </div>
    );
  };

  return (
    <Container>
      <h1 className="my-5">Friends List</h1>
      {!!totalFriends && (
        <Table
          data={Object.values(friendsMap)}
          columns={tableColumns}
          tableProps={{
            striped: true,
            bordered: true,
            hover: true,
            responsive: true,
          }}
        >
          {({ data, columns }) => {
            return data.map((row, rowIdx) => (
              <TableRow
                key={rowIdx}
                data={row}
                columns={columns}
                actionsSlot={actionsSlot(row)}
              />
            ));
          }}
        </Table>
      )}
      <Link to={PAGE_PATH.friends.new} className="btn btn-secondary">
        New Friend
      </Link>
    </Container>
  );
};
