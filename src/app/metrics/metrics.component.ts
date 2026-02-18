import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricService } from '../services/metric.service'; // Adjust path if necessary
import { Metric } from '../services/metric.model'; // Assuming Metric model is defined in a separate model file

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  metrics: Metric[] = [];
  errorMessage: string = '';

  constructor(private metricService: MetricService) { }

  ngOnInit(): void {
    this.getMetrics();
  }

  getMetrics(): void {
    this.metricService.getMetrics().subscribe({
      next: metrics => {
        this.metrics = metrics;
        console.log('Metrics fetched:', this.metrics);
      },
      error: err => {
        this.errorMessage = err;
        console.error('Error fetching metrics:', err);
      }
    });
  }
}
