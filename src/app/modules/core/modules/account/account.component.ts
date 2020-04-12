import { Component, OnInit, TemplateRef } from '@angular/core';
import { BreadCrumbItem } from 'src/app/share/models';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { AccountVM, AccountCM, AccountUM } from 'src/app/view-models';
import { BasicService } from 'src/app/services';
import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  dialogRefMessage: NbDialogRef<any>;

  accounts: AccountVM[] = [];
  searchlist: AccountVM[] = [];
  selectedAccount: AccountVM;
  // tslint:disable-next-line:max-line-length
  selected = [];
  dialogRef: NbDialogRef<any>;
  searchObject = {
    fullname: '',
    role: '',
    phone: '',
    email: '',
  };
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private accountservice: BasicService<AccountVM, AccountCM, AccountUM>,
    private dialogService: NbDialogService,
  ) { }

  async ngOnInit() {
    this.accountservice.useGetAll('user').then((res) => {
      this.accounts = res;
      this.searchlist = res;
    });
    this.form = this.fb.group({
      email: [undefined, [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: [undefined, [Validators.required, Validators.pattern(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/)]],
      fullname: [undefined, Validators.required],
      role: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
  }
  useOpenModal = (dialog: any, type: 'create' | 'update') => {
    console.log(this.form);
    if (type === 'create') {
      this.form.get('email').reset();
      this.form.get('phone').reset();
      this.form.get('fullname').reset();
      this.form.get('role').reset();
      this.form.get('password').reset();
    } else {
      this.form.get('email').setValue(this.selectedAccount.email);
      this.form.get('phone').setValue(this.selectedAccount.phone);
      this.form.get('fullname').setValue(this.selectedAccount.fullname);
      this.form.get('role').setValue(this.selectedAccount.role);
      this.form.get('password').setValue(this.selectedAccount.password);
    }
    this.dialogRef = this.dialogService.open(dialog);
  }

  useFilter = () => {
    this.searchlist = this.accounts.filter(e =>
      e.fullname.includes(this.searchObject.fullname) &&
      e.role.includes(this.searchObject.role) &&
      e.phone.includes(this.searchObject.phone) &&
      e.email.includes(this.searchObject.email)
    );
  }
  onSelect({ selected }) {
    this.selectedAccount = selected[0];
  }

  delete() {
    swal.fire({
      title: 'Quyết định xóa?',
      text: 'Không thể khôi phục sau khi xóa!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!',
      cancelButtonText: 'Hủy'
    }).then((result) => {
      if (result.value) {
        this.accountservice.useDelete(this.selectedAccount.email, 'user').then((res) => {
          swal.fire('Thông báo', 'Xóa thành công', 'success');
          this.accounts.splice(this.accounts.findIndex((e) => e.email === this.selectedAccount.email), 1);
          this.selected = [];
          this.selectedAccount = undefined;
          this.useFilter();
        }).catch((err) => {
          swal.fire('Thông báo', 'Có lỗi xảy ra', 'error');
        });
      }
    });

  }
  update() {
    this.accountservice.useUpdate(this.form.value, 'user').then((res) => {
      swal.fire('Thông báo', 'Cập nhật thành công', 'success');
      this.dialogRef.close();
      this.accounts[this.accounts.findIndex((e) => e.email === this.selectedAccount.email)] = this.form.value;
      this.useFilter();
      this.selectedAccount = this.form.value;
      this.selected = [this.form.value];
    }).catch((err) => {
      swal.fire('Thông báo', 'Có lỗi xảy ra', 'error');
    });
  }
  create() {
    this.accountservice.useCreate(this.form.value, 'user').then((res) => {
      swal.fire('Thông báo', 'Thêm thành công', 'success');
      this.dialogRef.close();
      this.accounts.push({ ...this.form.value, historys: [] });
      if (this.selectedAccount) {
        this.selected = [this.selectedAccount];
      }
      this.useFilter();
    }).catch((err) => {
      swal.fire('Thông báo', 'Có lỗi xảy ra', 'error');
    });
  }

}
