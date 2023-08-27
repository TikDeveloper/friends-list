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
import { useMemo } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FriendList = () => {
  const friendsMap = useAppSelector(friendsSelector);
  const totalFriends = useAppSelector(totalQntFriendsSelector);

  const sortedFriends = useMemo(() => {
    return Object.values(friendsMap).sort((a, b) =>
      a.createdAt > b.createdAt ? -1 : 1
    );
  }, [friendsMap]);

  const actionsSlot = (row: Friend) => {
    return (
      <div className="d-flex gap-2">
        <Link
          to={PAGE_PATH.friends.edit.route(row.id)}
          className="btn btn-success"
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
          data={sortedFriends}
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
                dynamicSlots={{
                  name: (
                    <Link to={PAGE_PATH.friends.preview.route(row.id)}>
                      {row.name}
                    </Link>
                  ),
                }}
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
