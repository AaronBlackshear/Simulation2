UPDATE houses SET name = $2 WHERE id = $1;
UPDATE houses SET address = $3 WHERE id = $1;
UPDATE houses SET city = $4 WHERE id = $1;
UPDATE houses SET state = $5 WHERE id = $1;
UPDATE houses SET zip = $6 WHERE id = $1;