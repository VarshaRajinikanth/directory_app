import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private location = inject(Location);

  user: User | null = null;
  isLoading = true;
  error = '';

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = parseInt(idParam, 10);
      this.fetchUserDetails(id);
    } else {
      this.error = 'Invalid user ID.';
      this.isLoading = false;
    }
  }

  fetchUserDetails(id: number): void {
    this.userService.getUserById(id).subscribe({
      next: (data) => {
        this.user = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load user details. They might not exist.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
