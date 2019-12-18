import {Claim} from '../../models/Claim';
import {Resolve, ActivatedRoute, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ClaimService} from '../managers/claim.service';
import {Injectable} from '@angular/core';
import {StorageService} from '../security/storage.service';

@Injectable()
export class AllClaimsResolverService implements Resolve<Claim[]> {
  constructor(private claimService: ClaimService) {}

  // @ts-ignore
  resolve(route: ActivatedRoute, state: RouterStateSnapshot): Observable<Claim[]> {
    console.log(StorageService.get('currentUser').userId);
    return this.claimService.getAllClaimsByUser(StorageService.get('currentUser').userId);
  }
}
