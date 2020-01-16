import {Claim} from '../../models/Claim';
import {Resolve, ActivatedRoute, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ClaimService} from '../managers/claim.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ClaimDetailResolverService implements Resolve<Claim> {
  constructor(private claimService: ClaimService) {}

  // @ts-ignore
  resolve(route: ActivatedRoute, state: RouterStateSnapshot): Observable<Claim> | Promise<any> | any {
    // @ts-ignore
    return this.claimService.getClaimById(route.paramMap.get('id'));
  }
}
