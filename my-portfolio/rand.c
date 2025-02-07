int i = ((4 + 1 * 4 + 1) * 4 + 1);

0x900c

Hello World!

E

void transpose_matrix(int** mat, int m){
  for (int i=0; i<m; i++) {
    for (int j=i; j<m; j++) {
      int tmp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = tmp;
    }
  }
}

void init_matrix(int***, mat, int m, int n) {
    *mat = (int**) malloc(sizeof(int*) * m);
    for (int i = 0; i<m; i++) {
        (*mat)[i] = (int*) malloc(sizeof(int) * n);
    }
}

void free_matrix(int** mat, int m) {
    for (int i = 0; i<m; i++) {
        free(mat[i]);
    }
    free(mat);
}

void init_points(point_t*** space, int n) {
    point_t** tmp = (point_t**) malloc(sizeof(point_t*) * n);
    for (int i = 0; i<n; i++) {
        tmp[i] = (point_t*) malloc(sizeof(point_t));
        tmp[i]->x = rand();
        tmp[i]->y = rand();
        tmp[i]->z = rand();
        tmp[i]->mass = 1.0;
        tmp[i]->force = 0.0;

    }
}

double calc_distance(point_t* a, point_t* b) {
    int x = a->x - b->x;
    int y = a->y - b->y;
    int z = a->z - b->z;
    return sqrt((double) ((x*x) + (y*y) + (z*z)));
}

double calc_force(point_t* a, point_t* b) {
    double d = calc_distance(a,b);
    return G * (a->mass * b->mass) / (d*d);
}

void n_body(point_t** space, int n){
    for (int i=0; i<n; i++) {
        for (int j=0; j<n; j++) {
            if (j!=i) {
                space[i]->force += calc_force(space[i], space[j]);
            }
        }
    }
}