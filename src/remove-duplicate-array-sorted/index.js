const removeDuplicateArraySorted = (array) => {
  if (array.length === 0) return 0;
  let idx = 0;
  for (let k = 1; k < array.length; k++) {
    if (array[k] !== array[idx]) {
      idx++;
      array[idx] = array[k];
    }
  }
  return idx + 1;
};

// Diễn giải
/**
 * b1: kiểm tra nếu mảng không chứa item nào thì trả về 0
 * b2 tạo biến khởi đầu và tiếp theo chạy vòng for được bắt đầu từ item thứ 2. vì item thứ nhất
 * sẽ không bao giờ bị trùng vì nó là nơi bắt đầu
 * nếu array[k] mà khác array[idx] thì phải tăng idx để chạy tiếp. và lúc nào gán array[idx] bằng array[k]
 * sau đó ta lấy biến khởi đầu sau vòng lặp và trả về kết quả
 */
